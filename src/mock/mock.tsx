export const nav_data = [
  { id: 0, data: "Inicio" },
  { id: 1, data: "Sobre nosotros" },
  { id: 2, data: "Preguntas frecuentes" },
  { id: 3, data: "Contacto" },
];

export const form_state_register = {
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
  email: "",
  password: "",
};
export const form_state_login = {
  email: "",
  password: "",
};

/* usar data para acceder a otra ruta*/
export const nav_data_pet = [
  { id: 1, data: "Inicio", icon: "Icon_inicio.png", path: "/Inicio" },
  { id: 2, data: "Registro salud", icon: "Icon_registro_salud.png", path: "/Registro_salud" },
  { id: 3, data: "Nutrición", icon: "Icon_nutricion.png", path: "/Nutricion" },
  { id: 4, data: "Notificación", icon: "Icon_notificacion.png", path: "/Notificacion" },
];