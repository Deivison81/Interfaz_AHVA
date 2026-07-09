import React from 'react';

interface AccountBlockedProps {
  onBackToLogin: () => void;
}

export const AccountBlocked: React.FC<AccountBlockedProps> = ({ onBackToLogin }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-grow-1 py-4">
      <div
        className="card border-0 shadow-sm text-center"
        style={{ width: '100%', maxWidth: '330px', backgroundColor: '#F3F4F6', borderRadius: '6px' }}
      >
        <div className="card-body px-4 py-4">
          <i className="bi bi-person-lock" style={{ fontSize: '2.8rem', color: '#0B67D0', lineHeight: 1 }}></i>
          <h3 className="fw-semibold mb-1 mt-2" style={{ fontSize: '1rem', color: '#1F2530' }}>
            Cuenta bloqueada
          </h3>
          <h4 className="fw-semibold mb-3" style={{ fontSize: '1rem', color: '#1F2530' }}>
            temporalmente
          </h4>
          <p className="mb-0 text-muted" style={{ fontSize: '0.68rem', lineHeight: 1.5 }}>
            Has excedido el numero maximo de intentos fallidos [x]. Por seguridad, tu cuenta ha sido
            bloqueada durante 15 minutos. Intenta nuevamente mas tarde.
          </p>

          <button
            type="button"
            className="btn btn-sm mt-3 text-white"
            style={{ backgroundColor: '#8EAFD1', border: 'none', minWidth: '130px' }}
            onClick={onBackToLogin}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
