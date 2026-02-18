import { useState, useEffect, useCallback } from 'react';
import { Chess } from 'chess.js';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';

const PIECE_UNICODE = {
  wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
  bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟'
};

const PIECE_NAMES = {
  p: 'pawn', r: 'rook', n: 'knight', b: 'bishop', q: 'queen', k: 'king'
};

const PIECE_VALUES = {
  p: 1, n: 3, b: 3, r: 5, q: 9, k: 0
};

const ChessGame = ({ onComplete }) => {
  const [game] = useState(() => new Chess());
  const [board, setBoard] = useState(game.board());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [capturedByPlayer, setCapturedByPlayer] = useState([]);
  const [capturedByComputer, setCapturedByComputer] = useState([]);
  const [lastMove, setLastMove] = useState('');
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [mustWin, setMustWin] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (gameOver || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver, timeLeft]);

  const handleTimeUp = useCallback(() => {
    setGameOver(true);
    if (playerScore > computerScore) {
      setMessage("time's up! you won!");
      setShowMessage(true);
      setTimeout(() => onComplete(), 3000);
    } else {
      setMessage("time's up... you need to win to continue");
      setShowMessage(true);
      setMustWin(true);
    }
  }, [playerScore, computerScore, onComplete]);

  const makeWeakMove = useCallback(() => {
    const possibleMoves = game.moves({ verbose: true });
    if (possibleMoves.length === 0) return;

    // 70% chance to make a bad move (random)
    // 30% chance to make a decent move
    let selectedMove;
    if (Math.random() < 0.7) {
      // Random move (weak)
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      selectedMove = possibleMoves[randomIndex];
    } else {
      // Try to capture if possible, otherwise random
      const captureMoves = possibleMoves.filter(m => m.captured);
      if (captureMoves.length > 0) {
        selectedMove = captureMoves[Math.floor(Math.random() * captureMoves.length)];
      } else {
        selectedMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      }
    }

    const move = game.move(selectedMove);
    
    if (move.captured) {
      const capturedValue = PIECE_VALUES[move.captured];
      setComputerScore(prev => prev + capturedValue);
      setCapturedByComputer(prev => [...prev, move.captured]);
    }

    const pieceName = PIECE_NAMES[move.piece];
    setLastMove(`black moved ${pieceName} to ${move.to}`);
    setBoard(game.board());
  }, [game]);

  const handleGameOver = useCallback((winner) => {
    setGameOver(true);
    
    if (winner === 'player') {
      setMessage("you won! well played");
      setShowMessage(true);
      setTimeout(() => onComplete(), 3000);
    } else if (winner === 'computer') {
      setMessage("you need to win to unlock the next stage");
      setShowMessage(true);
      setMustWin(true);
    } else if (game.isDraw()) {
      setMessage("it's a draw... try again to win");
      setShowMessage(true);
      setMustWin(true);
    }
  }, [game, onComplete]);

  const handleSquareClick = useCallback((row, col) => {
    // Block all moves if game is over and player must win
    if (gameOver && mustWin) return;
    // Block all moves if game is over and player won (waiting for transition)
    if (gameOver && !mustWin) return;
    
    const square = String.fromCharCode(97 + col) + (8 - row);
    const clickedPiece = game.get(square);
    
    if (!selectedSquare) {
      if (clickedPiece && clickedPiece.color === 'w') {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setValidMoves(moves.map(m => m.to));
      }
      return;
    }
    
    if (selectedSquare === square) {
      setSelectedSquare(null);
      setValidMoves([]);
      return;
    }
    
    if (clickedPiece && clickedPiece.color === 'w') {
      setSelectedSquare(square);
      const moves = game.moves({ square, verbose: true });
      setValidMoves(moves.map(m => m.to));
      return;
    }
    
    try {
      const move = game.move({
        from: selectedSquare,
        to: square,
        promotion: 'q',
      });

      if (move) {
        if (move.captured) {
          const capturedValue = PIECE_VALUES[move.captured];
          setPlayerScore(prev => prev + capturedValue);
          setCapturedByPlayer(prev => [...prev, move.captured]);
        }

        const pieceName = PIECE_NAMES[move.piece];
        setLastMove(`white moved ${pieceName} to ${move.to}`);
        
        setBoard(game.board());
        setSelectedSquare(null);
        setValidMoves([]);
        setMoveCount((prev) => prev + 1);

        if (game.isGameOver()) {
          if (game.isCheckmate()) {
            handleGameOver('player');
          } else {
            handleGameOver('draw');
          }
          return;
        }

        setTimeout(() => {
          makeWeakMove();
          if (game.isGameOver()) {
            if (game.isCheckmate()) {
              handleGameOver('computer');
            } else {
              handleGameOver('draw');
            }
          }
        }, 500);
      } else {
        setSelectedSquare(null);
        setValidMoves([]);
      }
    } catch (error) {
      setSelectedSquare(null);
      setValidMoves([]);
    }
  }, [game, selectedSquare, gameOver, mustWin, makeWeakMove, handleGameOver]);

  const handleRestart = () => {
    game.reset();
    setBoard(game.board());
    setSelectedSquare(null);
    setValidMoves([]);
    setMoveCount(0);
    setGameOver(false);
    setMustWin(false);
    setPlayerScore(0);
    setComputerScore(0);
    setCapturedByPlayer([]);
    setCapturedByComputer([]);
    setLastMove('');
    setTimeLeft(120);
    setShowMessage(false);
  };

  useEffect(() => {
    if (moveCount === 1) {
      setMessage("great start!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    } else if (moveCount === 3) {
      setMessage("you're doing well");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    } else if (playerScore >= 5 && moveCount > 3) {
      setMessage("nice captures!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  }, [moveCount, playerScore]);

  const getPieceSymbol = (piece) => {
    if (!piece) return '';
    const key = piece.color + piece.type.toUpperCase();
    return PIECE_UNICODE[key] || '';
  };

  const getPieceColor = (piece) => {
    if (!piece) return 'transparent';
    return piece.color === 'w' ? '#FFFFFF' : '#1C1521';
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6" 
      style={{ position: 'relative', zIndex: 50 }}
    >
      {/* Top HUD - Computer's captured pieces and score */}
      <div style={{ 
        position: 'absolute', 
        top: '1rem', 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        zIndex: 80,
      }}>
        <div style={{
          padding: '0.5rem 1rem',
          background: `${BRAND.colors.primaryBg}90`,
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          border: `1px solid ${BRAND.colors.softPinkGlow}20`,
        }}>
          <p style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.warmNeutral, marginBottom: '0.25rem' }}>
            Black: {computerScore} pts
          </p>
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap', minHeight: '1.5rem' }}>
            {capturedByComputer.map((piece, i) => (
              <span key={i} style={{ fontSize: '1.2rem', color: '#FFFFFF', opacity: 0.7 }}>
                {PIECE_UNICODE['w' + piece.toUpperCase()]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timer and Last Move */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'flex-end',
        zIndex: 80,
      }}>
        <div style={{
          padding: '0.5rem 1rem',
          background: timeLeft < 30 ? `${BRAND.colors.mutedRose}40` : `${BRAND.colors.primaryBg}90`,
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          border: `1px solid ${timeLeft < 30 ? BRAND.colors.mutedRose : BRAND.colors.softPinkGlow}40`,
        }}>
          <p style={{ 
            fontSize: BRAND.typography.sizes.body, 
            color: timeLeft < 30 ? BRAND.colors.mutedRose : BRAND.colors.softPinkGlow,
            fontWeight: 500,
          }}>
            {formatTime(timeLeft)}
          </p>
        </div>
        {lastMove && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              padding: '0.5rem 1rem',
              background: `${BRAND.colors.primaryBg}90`,
              backdropFilter: 'blur(10px)',
              borderRadius: '8px',
              border: `1px solid ${BRAND.colors.softPinkGlow}20`,
              maxWidth: '200px',
            }}
          >
            <p style={{ 
              fontSize: BRAND.typography.sizes.small, 
              color: BRAND.colors.warmNeutral,
              fontStyle: 'italic',
            }}>
              {lastMove}
            </p>
          </motion.div>
        )}
      </div>

      <div 
        style={{ 
          position: 'relative', 
          zIndex: 60,
          width: 'min(90vw, 90vh, 600px)',
          maxWidth: '600px',
          marginBottom: '2rem',
        }}
      >
        {/* Overlay when game is over and must win */}
        {gameOver && mustWin && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `${BRAND.colors.primaryBg}60`,
            backdropFilter: 'blur(4px)',
            borderRadius: '8px',
            zIndex: 100,
            pointerEvents: 'all',
            cursor: 'not-allowed',
          }} />
        )}
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gridTemplateRows: 'repeat(8, 1fr)',
            gap: 0,
            width: '100%',
            aspectRatio: '1 / 1',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: `0 20px 60px ${BRAND.colors.softPinkGlow}30`,
            opacity: (gameOver && mustWin) ? 0.5 : 1,
            transition: 'opacity 0.3s ease',
          }}
        >
          {board.map((row, rowIndex) =>
            row.map((piece, colIndex) => {
              const isLight = (rowIndex + colIndex) % 2 === 0;
              const square = String.fromCharCode(97 + colIndex) + (8 - rowIndex);
              const isSelected = selectedSquare === square;
              const isValidMove = validMoves.includes(square);
              const targetPiece = game.get(square);
              const isCapture = isValidMove && targetPiece;
              
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                  style={{
                    backgroundColor: isSelected 
                      ? BRAND.colors.softPinkGlow 
                      : isValidMove
                        ? `${BRAND.colors.mutedRose}80`
                        : isLight 
                          ? BRAND.colors.warmNeutral 
                          : BRAND.colors.warmBrownAccent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: (gameOver && mustWin) ? 'not-allowed' : 'pointer',
                    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                    userSelect: 'none',
                    transition: 'all 0.2s ease',
                    aspectRatio: '1 / 1',
                    position: 'relative',
                    color: getPieceColor(piece),
                    textShadow: piece 
                      ? piece.color === 'w' 
                        ? '0 0 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)' 
                        : '0 0 2px rgba(255,255,255,0.8), 0 0 4px rgba(255,255,255,0.6)'
                      : 'none',
                    fontWeight: 'bold',
                    border: isCapture ? `2px solid ${BRAND.colors.mutedRose}` : 'none',
                    boxShadow: isCapture ? `inset 0 0 10px ${BRAND.colors.mutedRose}80` : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!gameOver) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.zIndex = '10';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.zIndex = '1';
                  }}
                >
                  {getPieceSymbol(piece)}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Bottom HUD - Player's captured pieces and score */}
      <div style={{ 
        position: 'absolute', 
        bottom: '1rem', 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        zIndex: 80,
      }}>
        <div style={{
          padding: '0.5rem 1rem',
          background: `${BRAND.colors.primaryBg}90`,
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          border: `1px solid ${BRAND.colors.softPinkGlow}40`,
        }}>
          <p style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.softPinkGlow, marginBottom: '0.25rem', fontWeight: 500 }}>
            White (You): {playerScore} pts
          </p>
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap', minHeight: '1.5rem' }}>
            {capturedByPlayer.map((piece, i) => (
              <span key={i} style={{ fontSize: '1.2rem', color: '#1C1521', opacity: 0.9 }}>
                {PIECE_UNICODE['b' + piece.toUpperCase()]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-center px-6 max-w-2xl"
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              zIndex: 90,
              pointerEvents: 'all',
            }}
          >
            <div style={{
              padding: '2rem',
              background: `${BRAND.colors.primaryBg}95`,
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: `2px solid ${BRAND.colors.softPinkGlow}40`,
            }}>
              <p
                style={{
                  fontSize: BRAND.typography.sizes.title,
                  color: BRAND.colors.softPinkGlow,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: BRAND.typography.lineHeight.relaxed,
                  marginBottom: mustWin ? '1.5rem' : 0,
                }}
              >
                {message}
              </p>
              {mustWin && (
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={handleRestart}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '0.75rem 2rem',
                      background: `${BRAND.colors.softPinkGlow}20`,
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${BRAND.colors.softPinkGlow}60`,
                      borderRadius: '12px',
                      color: BRAND.colors.softPinkGlow,
                      fontSize: BRAND.typography.sizes.body,
                      fontWeight: 400,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    try again
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full screen overlay when must win - blocks all clicks */}
      {gameOver && mustWin && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: `${BRAND.colors.primaryBg}40`,
          backdropFilter: 'blur(2px)',
          zIndex: 85,
          pointerEvents: 'all',
        }} />
      )}

      {!gameOver && moveCount === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 70,
            pointerEvents: 'none',
          }}
        >
          <motion.p
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              fontSize: BRAND.typography.sizes.title,
              color: BRAND.colors.softPinkGlow,
              fontWeight: 300,
              marginBottom: '0.5rem',
            }}
          >
            you are white
          </motion.p>
          <motion.p
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            style={{
              fontSize: BRAND.typography.sizes.body,
              color: BRAND.colors.warmNeutral,
              fontWeight: 300,
            }}
          >
            capture pieces to score points
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default ChessGame;
