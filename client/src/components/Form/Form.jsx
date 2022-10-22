import React from "react";
import { ciudadOrigen, ciudadDestino } from "../../static/constants";
import { useForm } from "../../static/utils/hooks/useForm";
import { packageType } from "../../static/constants";

const initialForm = {
  shipment: "",
  name: "",
  origenCity: "",
  destineCity: "",
  cellphone: null,
  email: "",
  weight: null,
  measure: null,
  value: null,
  homeAdress: "",
  moreDetails: "",
};

export default function Form() {
  const { form, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    packageType
  );

  return (
    <div>
      <form id="quotation" onSubmit={handleSubmit} noValidate>
        <label>Seleccione un tipo de envio*</label>
        <select name="shipment" value={form.shipment} onChange={handleChange}>
          <option value="0">Seleccione una opción</option>
          <option value="Particular">Envio Personal</option>
          <option value="Empresa">Envio para empresa</option>
        </select>
        {errors.shipment && <p>{errors.shipment}</p>}
        <label>Ciudad de origen*</label>
        <select
          name="origenCity"
          value={form.origenCity}
          onChange={handleChange}
        >
          <option value="0">Seleccione una opción</option>
          {ciudadOrigen.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
        {errors.origenCity && <p>{errors.origenCity}</p>}
        <label>Ciudad de destino*</label>
        <select
          name="destineCity"
          value={form.destineCity}
          onChange={handleChange}
        >
          <option value="0">Seleccione una opción</option>
          {ciudadDestino.map((d) => (
            <option value={d}>{d}</option>
          ))}
        </select>
        {errors.destineCity && <p>{errors.destineCity}</p>}
        <label>Nombre*</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <label>Celular* (incluir código de área)</label>
        <input
          type="number"
          name="cellphone"
          value={form.cellphone}
          onChange={handleChange}
        />
        {errors.cellphone && <p>{errors.cellphone}</p>}
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <label>Peso aproximado (en kg.)</label>
        <input
          type="number"
          inputMode="decimal"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
        {errors.weight && <p>{errors.weight}</p>}
        <label>Altura aproximada (en cm.)</label>
        <input
          type="number"
          inputMode="decimal"
          name="measure"
          value={form.measure}
          onChange={handleChange}
        />
        {errors.measure && <p>{errors.measure}</p>}
        <label>Valor aproximado (en AR$)</label>
        <input
          type="number"
          inputMode="decimal"
          name="value"
          value={form.value}
          onChange={handleChange}
        />
        {errors.value && <p>{errors.value}</p>}
        <label>Dirección*</label>
        <input
          type="text"
          name="homeAdress"
          value={form.homeAdress}
          onChange={handleChange}
        />
        {errors.homeAdress && <p>{errors.homeAdress}</p>}
        <label id="details">Información adicional</label>
        <textarea
          name="moreDetails"
          value={form.moreDetails}
          rows="5"
          cols="30"
          onChange={handleChange}
        ></textarea>
        {errors.moreDetails && <p>{errors.moreDetails}</p>}
        <input
          type="submit"
          value="Enviar"
          disabled={
            Object.keys(errors).length ||
            errors.shipment ||
            errors.origenCity ||
            errors.destineCity ||
            errors.name ||
            errors.cellphone ||
            errors.email ||
            errors.weight ||
            errors.measure ||
            errors.value ||
            errors.homeAdress ||
            errors.moreDetails
          }
        />
      </form>
    </div>
  );
}