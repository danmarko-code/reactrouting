import { useState, useEffect, useRef } from 'react';

function PortalMascot() {
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [mood, setMood] = useState('Grab and toss me around! 🚀');
  const [expression, setExpression] = useState('normal');

  // Drag coordinates & animation states
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

  const mascotRef = useRef(null);
  const dragStartRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });
  const returnTimerRef = useRef(null);
  const hasMovedRef = useRef(false);

  // Eye-tracking: pupils follow the cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mascotRef.current) return;

      const rect = mascotRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - mascotCenterX;
      const deltaY = e.clientY - mascotCenterY;
      const angle = Math.atan2(deltaY, deltaX);

      const maxDistance = 9;
      const x = Math.cos(angle) * maxDistance;
      const y = Math.sin(angle) * maxDistance;

      setEyeOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Pointer Down: Captures the drag
  const handlePointerDown = (e) => {
    if (e.button !== 0) return;

    // Clear any pending return timer
    if (returnTimerRef.current) {
      clearTimeout(returnTimerRef.current);
    }

    // Capture the pointer to guarantee drag tracking even outside window boundaries
    e.currentTarget.setPointerCapture(e.pointerId);

    setIsDragging(true);
    setIsReturning(false);
    setExpression('surprised');
    setMood('Wheeee! Hold on! 🌀');
    hasMovedRef.current = false;

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y
    };
  };

  // Pointer Move: Updates position in real time
  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      hasMovedRef.current = true;
    }

    setPosition({
      x: dragStartRef.current.initialX + deltaX,
      y: dragStartRef.current.initialY + deltaY
    });
  };

  // Pointer Up: Release and start the 3-second return countdown
  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (hasMovedRef.current) {
      setMood('Going home in 3s... ⏳');
      setExpression('happy');

      // 3-second countdown timer to snap back
      returnTimerRef.current = setTimeout(() => {
        setIsReturning(true);
        setPosition({ x: 0, y: 0 });
        setMood('Back home! ✨');

        // Reset transition curve after spring animation finishes
        setTimeout(() => {
          setIsReturning(false);
          setExpression('normal');
        }, 850);
      }, 3000);
    } else {
      // Tap/click interaction
      cycleDialogue();
    }
  };

  const cycleDialogue = () => {
    const dialogues = [
      { text: 'Aced that lab exercise! 💯', expr: 'happy' },
      { text: 'You got this semester in the bag! 😉', expr: 'wink' },
      { text: 'Checking the student roster...', expr: 'normal' },
      { text: 'Look at that clean UI! ✨', expr: 'happy' }
    ];
    const random = dialogues[Math.floor(Math.random() * dialogues.length)];
    setMood(random.text);
    setExpression(random.expr);

    setTimeout(() => setExpression('normal'), 3000);
  };

  return (
    <div
      className={`mascot-container expr-${expression} ${isDragging ? 'is-dragging' : ''} ${isReturning ? 'is-returning' : ''}`}
      ref={mascotRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      title="Drag me anywhere!"
    >
      <div className="mascot-speech-bubble">
        <span>{mood}</span>
      </div>

      <div className="mascot-body">
        <div className="mascot-antenna"></div>

        <div className="mascot-cheeks">
          <span className="cheek left"></span>
          <span className="cheek right"></span>
        </div>

        <div className="mascot-face">
          <div className="mascot-eye left-eye">
            <div
              className="mascot-pupil"
              style={{
                transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`
              }}
            />
          </div>

          <div className="mascot-eye right-eye">
            <div
              className="mascot-pupil"
              style={{
                transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`
              }}
            />
          </div>
        </div>

        <div className="mascot-mouth"></div>
      </div>
    </div>
  );
}

export default PortalMascot;