import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { useState, useRef, useEffect } from 'react';
import { Chess } from 'chess.js';

const PIECE_UNICODE = {
  wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
  bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟'
};

export const Scene14_ChessEpilogue = ({ onNext }) => {
  const [game, setGame] = useState(() => new Chess());
  const [board, setBoard] = useState(game.board());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [message, setMessage] = useState('');
  const [showEnding, setShowEnding] = useState(false);
  const [fullChessMode, setFullChessMode] = useState(false);
  const chessSectionRef = useRef(null);
  const endingSectionRef = useRef(null);

  useEffect(() => {
    if (showEnding && endingSectionRef.current) {
      endingSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showEnding]);

  const handlePlayFullChess = (e) => {
    e.preventDefault();
    setFullChessMode(true);
    setMoveCount(0);
    const newGame = new Chess();
    setGame(newGame);
    setBoard(newGame.board());
    setSelectedSquare(null);
    setValidMoves([]);
    setMessage('');
    if (chessSectionRef.current) {
      chessSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSquareClick = (rowIndex, colIndex) => {
    if (!fullChessMode && moveCount >= 3) return;

    const square = String.fromCharCode(97 + colIndex) + (8 - rowIndex);

    if (!selectedSquare) {
      const piece = game.get(square);
      if (piece && piece.color === 'w') {
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

    try {
      const move = game.move({
        from: selectedSquare,
        to: square,
        promotion: 'q',
      });

      if (move) {
        setBoard(game.board());
        setSelectedSquare(null);
        setValidMoves([]);
        
        const newMoveCount = moveCount + 1;
        setMoveCount(newMoveCount);

        // Only show messages and trigger ending in initial 3-move mode
        if (!fullChessMode) {
          if (newMoveCount === 1) {
            setTimeout(() => setMessage('I knew you would do that'), 300);
            setTimeout(() => setMessage(''), 1000);
          } else if (newMoveCount === 2) {
            setTimeout(() => setMessage('this is very you'), 300);
            setTimeout(() => setMessage(''), 1000);
          } else if (newMoveCount === 3) {
            setTimeout(() => setMessage('you do not play around'), 300);
            setTimeout(() => setMessage(''), 1000);
            setTimeout(() => {
              setShowEnding(true);
            }, 1500);
            return;
          }
        }

        // Computer makes a move (in both modes)
        if (fullChessMode || newMoveCount < 3) {
          setTimeout(() => {
            const possibleMoves = game.moves();
            if (possibleMoves.length > 0) {
              const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
              game.move(randomMove);
              setBoard(game.board());
            }
          }, 800);
        }
      }
    } catch (e) {
      const piece = game.get(square);
      if (piece && piece.color === 'w') {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setValidMoves(moves.map(m => m.to));
      } else {
        setSelectedSquare(null);
        setValidMoves([]);
      }
    }
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: BRAND.colors.primaryBg,
        position: 'relative',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {/* Chess Section */}
      <div
        ref={chessSectionRef}
        className="w-full h-screen flex flex-col items-center justify-center px-6"
        style={{
          background: BRAND.colors.primaryBg,
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${BRAND.colors.warmNeutral}08 0%, transparent 70%)`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gridTemplateRows: 'repeat(8, 1fr)',
            gap: '0',
            width: 'min(90vw, 450px)',
            height: 'min(90vw, 450px)',
            maxWidth: '450px',
            maxHeight: '450px',
            background: '#2C2C2C',
            padding: 'clamp(6px, 1.5vw, 12px)',
            borderRadius: '8px',
            boxShadow: `0 20px 60px ${BRAND.colors.primaryBg}80`,
            margin: '0 auto',
          }}>
            {board.map((row, rowIndex) =>
              row.map((piece, colIndex) => {
                const isLight = (rowIndex + colIndex) % 2 === 0;
                const square = String.fromCharCode(97 + colIndex) + (8 - rowIndex);
                const isSelected = selectedSquare === square;
                const isValidMove = validMoves.includes(square);

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    onClick={() => handleSquareClick(rowIndex, colIndex)}
                    style={{
                      background: isSelected 
                        ? BRAND.colors.softPinkGlow 
                        : isValidMove 
                        ? '#90EE90' 
                        : isLight 
                        ? '#FFFFFF' 
                        : '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                      cursor: moveCount < 3 ? 'pointer' : 'default',
                      transition: 'all 0.2s ease',
                      aspectRatio: '1',
                      userSelect: 'none',
                      color: piece && piece.color === 'w' ? '#FFFFFF' : '#000000',
                      textShadow: piece && piece.color === 'w' 
                        ? '0 0 2px #000000, 0 0 4px #000000' 
                        : '0 0 2px #FFFFFF, 0 0 4px #FFFFFF',
                    }}
                  >
                    {piece && PIECE_UNICODE[piece.color + piece.type.toUpperCase()]}
                  </div>
                );
              })
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 100,
                pointerEvents: 'none',
              }}
            >
              <p
                style={{
                  fontSize: BRAND.typography.sizes.title,
                  color: BRAND.colors.softPinkGlow,
                  fontWeight: 400,
                  textAlign: 'center',
                  fontFamily: BRAND.typography.fonts.body,
                  textShadow: `0 0 20px ${BRAND.colors.primaryBg}`,
                  padding: '2rem',
                  background: `${BRAND.colors.primaryBg}CC`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                }}
              >
                {message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ending Section - Hidden until 3rd move */}
      {showEnding && (
        <motion.div
          ref={endingSectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-screen flex flex-col items-center justify-center px-6"
          style={{
            background: BRAND.colors.primaryBg,
          }}
        >
          <motion.img
            src="/download__5_-removebg-preview (1).png"
            alt="Flower"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -8, 0],
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{
              width: 'clamp(100px, 18vw, 180px)',
              height: 'auto',
              marginBottom: '2rem',
              filter: 'drop-shadow(0 10px 30px rgba(231, 184, 201, 0.4))',
              mixBlendMode: 'screen',
              opacity: 0.9,
            }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: BRAND.typography.lineHeight.relaxed,
              color: BRAND.colors.warmNeutral,
              fontWeight: 700,
              marginBottom: '1rem',
              fontFamily: BRAND.typography.fonts.body,
              textTransform: 'lowercase',
              textAlign: 'center',
            }}
          >
            the end
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              fontSize: BRAND.typography.sizes.body,
              lineHeight: BRAND.typography.lineHeight.relaxed,
              color: BRAND.colors.warmNeutral,
              fontWeight: 400,
              marginBottom: '1.5rem',
              fontFamily: BRAND.typography.fonts.body,
              textAlign: 'center',
            }}
          >
            hope you loved it
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{
              fontSize: BRAND.typography.sizes.small,
              lineHeight: BRAND.typography.lineHeight.normal,
              color: BRAND.colors.mutedRose,
              fontWeight: 400,
              fontFamily: BRAND.typography.fonts.body,
              textAlign: 'center',
            }}
          >
            if you want to play the chess fully{' '}
            <a
              href="#"
              onClick={handlePlayFullChess}
              style={{
                color: BRAND.colors.softPinkGlow,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              click here
            </a>
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};
