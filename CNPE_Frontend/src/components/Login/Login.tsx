import React from 'react';
import { useRef, useState } from 'react';

interface LoginProps {
	onLogin: () => void;
	onBlocked: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onBlocked }) => {
	const [docType, setDocType] = useState<'dni' | 'ce'>('dni');
	const [usuario, setUsuario] = useState('');
	const [contrasena, setContrasena] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [failedAttempts, setFailedAttempts] = useState(0);
	const [errorMessage, setErrorMessage] = useState('');

	const MAX_FAILED_ATTEMPTS = 3;
	const clickTimerRef = useRef<number | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!usuario.trim() || !contrasena.trim()) {
			setErrorMessage('Ingrese usuario y contraseña.');
			return;
		}

		const isValidCredentials = usuario.trim() === '46846596' && contrasena.trim() === '123456';

		if (isValidCredentials) {
			setErrorMessage('');
			setFailedAttempts(0);
			onLogin();
			return;
		}

		const nextAttempts = failedAttempts + 1;
		setFailedAttempts(nextAttempts);

		if (nextAttempts >= MAX_FAILED_ATTEMPTS) {
			onBlocked();
			return;
		}

		setErrorMessage(`Usuario o contraseña incorrectos. Intentos restantes: ${MAX_FAILED_ATTEMPTS - nextAttempts}.`);
	};

	const handleTemporarySingleClick = () => {
		if (clickTimerRef.current !== null) {
			window.clearTimeout(clickTimerRef.current);
		}

		clickTimerRef.current = window.setTimeout(() => {
			onLogin();
			clickTimerRef.current = null;
		}, 220);
	};

	const handleTemporaryDoubleClick = () => {
		if (clickTimerRef.current !== null) {
			window.clearTimeout(clickTimerRef.current);
			clickTimerRef.current = null;
		}
		onBlocked();
	};

	return (
		<div className="container d-flex justify-content-center align-items-center flex-grow-1">
			<div
				className="w-100"
				style={{ maxWidth: '375px' }}
			>
				<div className="rounded-4 p-4 border-0 shadow-sm mb-3" style={{ backgroundColor: '#EEF0F2' }}>
					<div
						className="d-flex rounded-3 border overflow-hidden mb-4"
						style={{ borderColor: '#8F98A3' }}
					>
						<button
							type="button"
							className="btn rounded-0 flex-fill py-2"
							onClick={() => setDocType('dni')}
							style={{
								backgroundColor: docType === 'dni' ? '#7A838D' : '#EEF0F2',
								color: docType === 'dni' ? '#FFFFFF' : '#6F7882',
								fontWeight: 500,
								fontSize: '1rem',
								border: 'none',
							}}
						>
							DNI
						</button>
						<button
							type="button"
							className="btn rounded-0 flex-fill py-2"
							onClick={() => setDocType('ce')}
							style={{
								backgroundColor: docType === 'ce' ? '#7A838D' : '#EEF0F2',
								color: docType === 'ce' ? '#FFFFFF' : '#6F7882',
								fontWeight: 500,
								fontSize: '1rem',
								border: 'none',
							}}
						>
							CE
						</button>
					</div>

					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="usuario" className="form-label fw-semibold text-dark mb-2" style={{ fontSize: '1rem' }}>Usuario</label>
							<div className="position-relative">
								<i
									className="bi bi-person position-absolute"
									style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#8D959C', fontSize: '1.15rem', zIndex: 1 }}
								></i>
								<input
									id="usuario"
									type="text"
									className="form-control"
									placeholder="Ingresar usuario"
									value={usuario}
									onChange={(event) => {
										setUsuario(event.target.value);
										if (errorMessage) setErrorMessage('');
									}}
									style={{ height: '40px', paddingLeft: '36px', borderColor: '#BAC1C8', borderRadius: '7px', backgroundColor: '#F4F5F7' }}
									required
								/>
							</div>
						</div>

						<div className="mb-2">
							<label htmlFor="contrasena" className="form-label fw-semibold text-dark mb-2" style={{ fontSize: '1rem' }}>Contraseña</label>
							<div className="position-relative">
								<i
									className="bi bi-lock position-absolute"
									style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#8D959C', fontSize: '1.05rem', zIndex: 1 }}
								></i>
								<input
									id="contrasena"
									type={showPassword ? 'text' : 'password'}
									className="form-control"
									placeholder="Ingresar contraseña"
									value={contrasena}
									onChange={(event) => {
										setContrasena(event.target.value);
										if (errorMessage) setErrorMessage('');
									}}
									style={{ height: '40px', paddingLeft: '36px', paddingRight: '36px', borderColor: '#BAC1C8', borderRadius: '7px', backgroundColor: '#F4F5F7' }}
									required
								/>
								<button
									type="button"
									className="btn p-0 border-0 position-absolute"
									onClick={() => setShowPassword((current) => !current)}
									style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#8D959C', zIndex: 1 }}
								>
									<i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
								</button>
							</div>
						</div>

						<div className="mb-4">
							<a href="#" className="text-decoration-none" style={{ color: '#005EC9', fontSize: '0.95rem', fontWeight: 500 }}>
								¿Olvidó su contraseña?
							</a>
						</div>

						{errorMessage ? (
							<div className="mb-3 text-danger" style={{ fontSize: '0.78rem' }}>
								{errorMessage}
							</div>
						) : null}

						<button
							type="button"
							className="btn w-100 text-white fw-semibold"
							style={{ backgroundColor: '#8EAFD1', border: 'none', borderRadius: '8px', height: '44px', fontSize: '1.1rem' }}
							onClick={handleTemporarySingleClick}
							onDoubleClick={handleTemporaryDoubleClick}
						>
							Ingresar
						</button>
						<p className="mt-2 mb-0 text-muted" style={{ fontSize: '0.72rem' }}>
							Temporal: click va a dashboard y doble click va a cuenta bloqueada.
						</p>
					</form>
				</div>

				<div className="rounded-4 p-3 shadow-sm d-flex align-items-center gap-3" style={{ backgroundColor: '#EEF0F2' }}>
					<i className="bi bi-person-workspace" style={{ color: '#0B67D0', fontSize: '1.95rem' }}></i>
					<p className="mb-0 text-muted" style={{ fontSize: '0.95rem' }}>
						¿Necesita ayuda?, <a href="#" className="text-decoration-none" style={{ color: '#0B67D0' }}>contacte con el área de soporte.</a>
					</p>
				</div>
			</div>
		</div>
	);
};
