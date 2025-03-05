import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    serviceProvider: false, // Define se é cliente ou prestador de serviço
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
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirme a Senha" value={formData.confirmPassword} onChange={handleChange} required />

        <label>
          <input type="checkbox" name="serviceProvider" checked={formData.serviceProvider} onChange={handleChange} />
          Sou um prestador de serviço
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
