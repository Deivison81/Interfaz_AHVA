import React from 'react';

interface UserProfileProps {
	onBack: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ onBack }) => {
	return (
		<div className="container text-center py-5">
			<div className="card p-4 shadow-sm border-0 mx-auto" style={{ maxWidth: '500px', borderRadius: '12px' }}>
				<h4 className="fw-bold text-success mb-2">
					<i className="bi bi-check-circle-fill me-2"></i>Módulo de Perfil Cargado
				</h4>
				<p className="text-muted small">Fase inicial y ruteo completados con éxito.</p>
				<button className="btn btn-secondary btn-sm mt-2" onClick={onBack}>
					Regresar
				</button>
			</div>
		</div>
	);
};
