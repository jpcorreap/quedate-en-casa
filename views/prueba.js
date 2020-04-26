const ejecutarAPI = () => {
  const mitexto = document.getElementById("parrafo").value;
  const tbody = document.getElementById("recordsTableBody");

  const aEnviar = { texto: mitexto };

  fetch("/postRespuesta", {
    method: "POST",
    body: JSON.stringify(aEnviar),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((respuesta) => {
      if (respuesta) {
        console.log("Llegaron las palabras clave ", respuesta);

        respuesta.forEach((register) => {
          let tr = document.createElement("tr");

          // Iterates over record's values
          const td = document.createElement("td");
          td.textContent = register[item];
          tr.appendChild(td);

          const td2 = document.createElement("td");
          td.textContent = register[item];
          tr.appendChild(td);

          const td3 = document.createElement("td");
          td.textContent = register[item];
          tr.appendChild(td);

          tbody.appendChild(tr);
        });
      }
    });
};
