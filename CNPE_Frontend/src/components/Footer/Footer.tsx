import React from 'react';

interface FooterProps {
  isDashboard?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDashboard = false }) => {
  return (
    <footer className="w-100 mt-auto" style={{ padding: '6px 14px 4px' }}>
      <div className={`d-flex ${isDashboard ? 'justify-content-start ps-5' : 'justify-content-end'} align-items-end`}>
        <div className="d-flex overflow-hidden" style={{ borderRadius: '1px', boxShadow: '0 0 0 1px rgba(0,0,0,0.06)' }}>
          <div
            className="d-flex align-items-center gap-1 px-2"
            style={{ backgroundColor: '#B20D12', minHeight: '24px', color: '#FFFFFF', borderRight: '1px solid rgba(255,255,255,0.22)' }}
          >
            <i className="bi bi-shield-fill" style={{ fontSize: '0.68rem' }}></i>
            <span className="fw-bold" style={{ fontSize: '0.58rem', letterSpacing: '0.2px' }}>PERU</span>
          </div>

          <div
            className="d-flex align-items-center px-2"
            style={{ backgroundColor: '#666C74', minHeight: '24px', color: '#FFFFFF', maxWidth: '126px', borderRight: '1px solid rgba(255,255,255,0.2)' }}
          >
            <span style={{ fontSize: '0.47rem', lineHeight: 1.1 }}>
              Presidencia del Consejo de Ministros
            </span>
          </div>

          <div
            className="d-flex align-items-center px-2"
            style={{ backgroundColor: '#848B93', minHeight: '24px', color: '#FFFFFF', maxWidth: '114px' }}
          >
            <span style={{ fontSize: '0.47rem', lineHeight: 1.1 }}>
              Centro Nacional de Planeamiento Estratégico
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};