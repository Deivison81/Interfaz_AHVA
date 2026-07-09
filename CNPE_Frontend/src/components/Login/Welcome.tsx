import React from 'react';

interface WelcomeProps {
  onNext: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-grow-1">
      <div 
        className="card p-5 text-center shadow-sm border-0 bg-white" 
        style={{ width: '100%', maxWidth: '440px', borderRadius: '16px' }}
      >
        {/* Círculo con el icono del Cohete */}
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
          style={{ width: '80px', height: '80px', backgroundColor: '#FFF0F2' }}
        >
          <i className="bi bi-rocket-takeoff fs-1 text-danger" style={{ color: '#E14D5F' }}></i>
        </div>

        {/* Textos Informativos del video */}
        <h3 className="fw-bold text-dark mb-3">¡Bienvenida, July!</h3>
        <p className="text-muted small mb-1">Su cuenta en el aplicativo X está activada.</p>
        <p className="text-muted small mb-4">Ya puede iniciar sesión.</p>

        {/* Botón de acción principal */}
        <button 
          type="button" 
          className="btn btn-primary w-100 py-2.5 fw-semibold" 
          style={{ backgroundColor: '#0056AC', border: 'none', borderRadius: '8px', fontSize: '0.95rem' }}
          onClick={onNext}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};