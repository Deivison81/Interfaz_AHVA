import React from 'react';

interface HeaderProps {
  isLoggedIn: boolean;
  usuarioName?: string;
  usuarioCargo?: string;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, usuarioName, usuarioCargo }) => {
  return (
    <header
      className="w-100 d-flex align-items-center"
      style={{ backgroundColor: '#A70E12', minHeight: '42px', borderBottom: '1px solid rgba(255,255,255,0.12)' }}
    >
      <div className="container-fluid px-2 px-md-3 py-1 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="text-white" style={{ lineHeight: 1 }}>
            <span className="fw-bold d-block" style={{ fontSize: '0.86rem', letterSpacing: '0.3px' }}>
              CEPLAN
            </span>
            <span style={{ fontSize: '0.4rem', opacity: 0.9 }}>
              Centro Nacional de Planeamiento Estratégico
            </span>
          </div>
        </div>

        {isLoggedIn ? (
          <div className="d-flex align-items-center gap-2">
            <span className="text-white" style={{ fontSize: '1rem', lineHeight: 1 }}>?</span>
            <span className="text-white position-relative" style={{ fontSize: '0.78rem', lineHeight: 1 }}>
              <i className="bi bi-bell-fill"></i>
              <span
                className="position-absolute rounded-circle"
                style={{ right: '-5px', top: '-4px', width: '8px', height: '8px', backgroundColor: '#1E90FF' }}
              ></span>
            </span>
            <i className="bi bi-person-fill text-white" style={{ fontSize: '0.78rem' }}></i>
            <div className="text-start d-none d-md-block">
              <h6 className="mb-0 fw-semibold text-white" style={{ fontSize: '0.7rem' }}>
                {usuarioName || 'Mendoza Quispe, July Camila'}
              </h6>
              <span className="text-white" style={{ fontSize: '0.58rem', opacity: 0.88 }}>
                {usuarioCargo || 'Operador'}
              </span>
            </div>
          </div>
        ) : (
          <a href="#" className="text-decoration-none text-white d-flex align-items-center" style={{ fontSize: '1.05rem', lineHeight: 1, paddingRight: '2px' }}>
            ?
          </a>
        )}
      </div>
    </header>
  );
};