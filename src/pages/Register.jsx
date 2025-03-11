import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    serviceProvider: false,
    atendeDomicilio: "",
    servicos: "",
    contato: "",
  });

  const navigate = useNavigate(); // Para redirecionamento após cadastro

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        navigate("/login"); // Redireciona para a página de login
      } else {
        alert("Erro no cadastro!");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Falha ao conectar ao servidor.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme a Senha"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Checkbox para prestador de serviço */}
          <div className="input-group">
            <label>Tipo de usuário:</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="cliente">Cliente</option>
              <option value="barbeiro">Barbeiro</option>
            </select>
          </div>


          {/* Inputs extras aparecem se for prestador de serviço */}
          {formData.userType === "barbeiro" && (
            <>
              <div className="input-group">
                <label>Atende a domicílio?</label>
                <select
                  name="atendeDomicilio"
                  value={formData.atendeDomicilio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="sim">Sim</option>
                  <option value="não">Não</option>
                </select>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="servicos"
                  placeholder="Tipos de serviços oferecidos"
                  value={formData.servicos}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="contato"
                  placeholder="Contato"
                  value={formData.contato}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <button type="submit">Cadastrar</button>
        </form>

        <div className="login-link">
          <p>
            Já tem uma conta? <a href="/login">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
