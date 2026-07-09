import React from 'react';

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div className="container-fluid px-0" style={{ minHeight: '100%' }}>
      <div className="d-flex" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <aside
          className="bg-white border-end d-flex flex-column align-items-center py-3"
          style={{ width: '44px', borderColor: '#E6E8EB' }}
        >
          <button type="button" className="btn btn-sm p-0 mb-3 text-secondary border-0">
            <i className="bi bi-list" style={{ fontSize: '0.95rem' }}></i>
          </button>
          <div className="d-flex flex-column gap-3 mt-1">
            <span className="text-muted" style={{ fontSize: '0.75rem' }}>
              <i className="bi bi-house"></i>
            </span>
            <span className="text-muted" style={{ fontSize: '0.75rem' }}>
              <i className="bi bi-bar-chart"></i>
            </span>
            <span
              className="rounded-2 d-flex align-items-center justify-content-center"
              style={{ width: '22px', height: '22px', backgroundColor: '#FCEBEC', color: '#B61B1F', fontSize: '0.75rem' }}
            >
              <i className="bi bi-person"></i>
            </span>
            <span className="text-muted" style={{ fontSize: '0.75rem' }}>
              <i className="bi bi-search"></i>
            </span>
          </div>
        </aside>

        <section className="flex-grow-1 px-3 px-md-4 py-3">
          <p className="text-muted mb-1" style={{ fontSize: '0.62rem' }}>Perfil de usuario</p>
          <h2 className="fw-semibold mb-3" style={{ fontSize: '1.95rem', color: '#22272F' }}>Perfil de usuario</h2>

          <div className="card border-0 shadow-sm">
            <div className="card-body py-3 px-3 px-md-4">
              <div className="d-flex align-items-start gap-3 mb-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '54px', height: '54px', backgroundColor: '#84A6E5', color: '#FFFFFF' }}
                >
                  <i className="bi bi-person-fill" style={{ fontSize: '1.4rem' }}></i>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <h3 className="mb-0 fw-semibold" style={{ fontSize: '0.92rem', color: '#25303A' }}>
                      Mendoza Quispe, July Camila
                    </h3>
                    <span
                      className="badge fw-normal"
                      style={{ backgroundColor: '#E7F5EA', color: '#4A8D59', fontSize: '0.55rem' }}
                    >
                      ACTIVO
                    </span>
                  </div>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.72rem' }}>Administrador de Recursos</p>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.62rem' }}>011 Ministerio de Salud</p>
                </div>
              </div>

              <div className="border-bottom mb-3" style={{ borderColor: '#E4E7EB' }}>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-sm rounded-0 px-0 me-4"
                    style={{ color: '#0B67D0', borderBottom: '2px solid #0B67D0', fontSize: '0.68rem' }}
                  >
                    Informacion basica
                  </button>
                  <button type="button" className="btn btn-sm rounded-0 px-0 me-4 text-muted" style={{ fontSize: '0.68rem' }}>
                    Responsabilidades
                  </button>
                  <button type="button" className="btn btn-sm rounded-0 px-0 text-muted" style={{ fontSize: '0.68rem' }}>
                    Historial de responsabilidades
                  </button>
                </div>
              </div>

              <div className="row g-2 g-md-3">
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Nombres</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>July Camila</div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Primer Apellido</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>Mendoza</div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Segundo Apellido</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>Quispe</div>
                </div>

                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Tipo de Documento de Identidad</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>DNI</div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>N de Documento de Identidad</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>07079879</div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Fecha de nacimiento</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>15 / 04 / 1984</div>
                </div>

                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Nacionalidad</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>Peruana</div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Sexo</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>Femenino</div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Correo electronico principal</p>
                  <div className="rounded-2 px-2 py-1 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>
                    <span>test@minsa.gob.pe</span>
                    <i className="bi bi-pencil" style={{ color: '#0B67D0', fontSize: '0.7rem' }}></i>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <p className="mb-1 text-muted" style={{ fontSize: '0.62rem' }}>Correo electronico secundario (Opcional)</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem', minHeight: '24px' }}></div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Telefono Movil</p>
                  <div className="rounded-2 px-2 py-1 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>
                    <span>+51 999 999 999</span>
                    <i className="bi bi-pencil" style={{ color: '#0B67D0', fontSize: '0.7rem' }}></i>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Telefono secundario (Opcional)</p>
                  <div className="d-flex gap-2">
                    <div className="rounded-2 px-2 py-1 flex-shrink-0" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem', minWidth: '68px' }}>
                      Tipo
                    </div>
                    <div className="rounded-2 px-2 py-1 flex-grow-1" style={{ backgroundColor: '#F4F6F8', minHeight: '24px' }}></div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Tipo de Contratacion</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>CAS</div>
                </div>
                <div className="col-12 col-md-4">
                  <p className="mb-1 text-dark" style={{ fontSize: '0.62rem' }}>Fecha de contratacion</p>
                  <div className="rounded-2 px-2 py-1" style={{ backgroundColor: '#F4F6F8', fontSize: '0.68rem' }}>09 / 03 / 2015</div>
                </div>
              </div>

              <div className="d-flex justify-content-end mt-3">
                <button
                  type="button"
                  className="btn btn-sm text-white"
                  style={{ backgroundColor: '#A70E12', border: 'none' }}
                  onClick={onLogout}
                >
                  Cerrar sesion
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
