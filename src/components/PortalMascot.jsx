import { useState, useEffect, useRef } from 'react';

function PortalMascot() {
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [mood, setMood] = useState('Observing scholars...');
  const mascotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mascotRef.current) return;

      // Get the mascot's exact coordinates on screen
      const rect = mascotRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 2;

      // Calculate the angle and distance toward the cursor
      const deltaX = e.clientX - mascotCenterX;
      const deltaY = e.clientY - mascotCenterY;
      const angle = Math.atan2(deltaY, deltaX);

      // Max eye travel distance (in px)
      const maxDistance = 6;
      const x = Math.cos(angle) * maxDistance;
      const y = Math.sin(angle) * maxDistance;

      setEyeOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    const dialogues = [
      'Need help finding a course?',
      'Check out the Students tab!',
      'All grades looking sharp!',
      'Midterms are coming up!',
      'Great work coding today!'
    ];
    const randomDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
    setMood(randomDialogue);
  };

  return (
    <div 
      className="mascot-container" 
      ref={mascotRef}
      onClick={handleClick}
      title="Click me!"
    >
      <div className="mascot-speech-bubble">
        <span>{mood}</span>
      </div>

      <div className="mascot-body">
        <div className="mascot-face">
          {/* Left Eye */}
          <div className="mascot-eye">
            <div 
              className="mascot-pupil" 
              style={{
                transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`
              }}
            />
          </div>

          {/* Right Eye */}
          <div className="mascot-eye">
            <div 
              className="mascot-pupil" 
              style={{
                transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`
              }}
            />
          </div>
        </div>

        {/* Mascot Smile */}
        <div className="mascot-mouth"></div>
      </div>
    </div>
  );
}

export default PortalMascot;