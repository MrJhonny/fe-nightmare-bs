import React, { useState, useEffect } from "react";
import './ModalForm.css'; // Archivo CSS para personalizaciones
import { generateUsername } from "./GenerateUsername";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api/v1/";

const ModalForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newStory, setNewStory] = useState({
        title: "",
        name: "",
        recurrencia: "",
        category: "",
        value: "",
        email: "",
    });
    const [categories, setCategories] = useState([]);
    const [recurrenceTypes, setRecurrenceTypes] = useState([]);
    const [apiError, setApiError] = useState(null);

    // Deshabilitar el scroll al abrir el modal
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // Deshabilita el scroll
        } else {
            document.body.style.overflow = "auto"; // Habilita el scroll
        }

        // Limpieza al desmontar
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    // Fetch Categories and Recurrence Types
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesResponse, recurrenceResponse] = await Promise.all([
                    fetch(`${API_BASE_URL}categories`),
                    fetch(`${API_BASE_URL}info`),
                ]);

                if (!categoriesResponse.ok || !recurrenceResponse.ok) {
                    throw new Error("Failed to fetch data from the API");
                }

                const categoriesData = await categoriesResponse.json();
                const recurrenceData = await recurrenceResponse.json();

                setCategories(categoriesData.categories || []);
                setRecurrenceTypes(recurrenceData.recurrence_types || []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setApiError("Failed to fetch data. Please try again later.");
            }
        };

        fetchData();
    }, []);

    // Handle Input Changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStory((prevStory) => ({ ...prevStory, [name]: value }));
    };

    // Submit Story
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!newStory.title || !newStory.name || !newStory.recurrencia || !newStory.category || !newStory.value) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}notes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newStory),
            });

            if (!response.ok) {
                throw new Error("Failed to submit story");
            }

            alert("Story submitted successfully!");
            setIsModalOpen(false);
            setNewStory({ title: "", name: "", recurrencia: "", category: "", value: "", email: "" });
        } catch (error) {
            console.error("Error submitting story:", error);
            alert("Failed to submit story. Please try again later.");
        }
    };

    // Cerrar el modal al hacer clic fuera del formulario
    const handleModalClick = (e) => {
        if (e.target.classList.contains("modal")) {
            setIsModalOpen(false);
        }
    };

    return (
        <div>
            {/* Botón para abrir el modal */}
            <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    fontSize: "24px",
                }}
            >
                +
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="modal"
                    onClick={handleModalClick}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        className="modal-content"
                        style={{
                            backgroundColor: "#1e1e1e",
                            padding: "20px",
                            borderRadius: "10px",
                            color: "#fff",
                            width: "90%",
                            maxWidth: "500px",
                            position: "relative",
                        }}
                    >
                        <span
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                fontSize: "24px",
                                cursor: "pointer",
                                color: "#fff",
                            }}
                        >
                            &times;
                        </span>
                        <h2>Add a New Story</h2>
                        {apiError ? (
                            <p style={{ color: "red" }}>{apiError}</p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                {/* Name Input */}
                                <div className="name-generator-container">
                                    {/* Campo de entrada para el nombre */}
                                    <input
                                        type="text"
                                        name="name"
                                        className="name-generator-input"
                                        value={newStory.name}
                                        onChange={handleInputChange}
                                        placeholder="Use your name, nickname, or generate one"
                                        required
                                    />

                                    {/* Botón para generar un nombre */}
                                    <button
                                        type="button"
                                        className="name-generator-button"
                                        onClick={() => generateUsername(setNewStory)}
                                    >
                                        Generate Username
                                    </button>
                                </div>

                                {/* Title Input */}
                                <input
                                    type="text"
                                    name="title"
                                    value={newStory.title}
                                    onChange={handleInputChange}
                                    placeholder="Title of your nightmare"
                                    maxLength={30}
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "5px",
                                    }}
                                />

                                {/* Recurrence Select */}
                                <select
                                    name="recurrencia"
                                    value={newStory.recurrencia}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <option value="">How regularly does it happen?</option>
                                    {recurrenceTypes.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>

                                {/* Category Select */}
                                <select
                                    name="category"
                                    value={newStory.category}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>

                                {/* Story Textarea */}
                                <textarea
                                    name="value"
                                    value={newStory.value}
                                    onChange={handleInputChange}
                                    placeholder="Describe your story"
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "5px",
                                    }}
                                ></textarea>

                                {/* Email Input */}
                                <input
                                    type="email"
                                    name="email"
                                    value={newStory.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "5px",
                                    }}
                                />

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        backgroundColor: "crimson",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "5px",
                                    }}
                                >
                                    Submit
                                </button>
                                {/* Terms and Conditions */}

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginTop: "15px",
                                        fontSize: "14px",
                                        lineHeight: "1.5",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        name="acceptTerms"
                                        required
                                        style={{
                                            width: "16px",
                                            height: "16px",
                                            cursor: "pointer",
                                        }}
                                    />
                                    <label style={{ margin: 0 }}>
                                        I have read and accept the{" "}
                                        <a
                                            href="/terms"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "#fff",
                                                textDecoration: "underline",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            terms and conditions
                                        </a>
                                    </label>
                                </div>                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalForm;