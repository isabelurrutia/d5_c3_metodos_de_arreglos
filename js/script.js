const informacion_input = document.querySelector("#info_input")
const lista_de_tareas = document.querySelector("#tareas")
const agregar = document.querySelector("#boton_agregar")
const cantidad_de_tareas = document.querySelector("#cuenta_tareas")
const cantidad_de_realizadas = document.querySelector("#realizadas")


const tareas =[{id:Date.now(), nombre: "Llevar a los niños a la plaza", completado:false}, {id: (Date.now()+1), nombre: "Preparar minuta de la semana", completado:false}, {id: (Date.now()+2), nombre: "Salir a bailar con amigos", completado:false}, {id: (Date.now()+3), nombre: "Preparar la maleta para viajar", completado:false}]

const actualizar_realizado = function(id){
    const posicion = tareas.findIndex((obj) => {
        if (id === obj.id){
            return true;
        }
        return false
    })
    tareas[posicion].completado = !tareas[posicion].completado
    renderizar_tareas()
}

function renderizar_tareas(){
    let html = ""
    let contar = 0
    let cuenta = 0
    for (let tarea of tareas) {
        if(tarea.completado) {
            realizado = "checked"
            cuenta ++
        }else{
            realizado = ""
        }
        html += `
        <div class="d-flex justify-content-between">
            <div class="me-2 w-20">
                ${tarea.id}
            </div>
            <div class="w-50">
                ${tarea.nombre}
            </div>
            <div class="ms-2 w-10">
                <input onclick="actualizar_realizado(${tarea.id})" type="checkbox" ${realizado}>  
            </div>
            <div class="w-20">
                <button class="btn btn-danger ms-2 mb-2" onclick="borrar(${tarea.id})"> eliminar </button></li>
            </div>
        </div>`
        contar ++;
    }
    lista_de_tareas.innerHTML = html;
    cantidad_de_tareas.innerHTML = contar;
    cantidad_de_realizadas.innerHTML = cuenta;
    }

renderizar_tareas();

agregar.addEventListener("click", ()  => { 
    const nuevaTarea = informacion_input.value 
    if (nuevaTarea === ""){
        contar = contar - 1
    }else{
        tareas.push({id: Date.now(), nombre: nuevaTarea}) 
    }
    console.log(tareas)
    informacion_input.value  = "" 
    renderizar_tareas();
    })

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderizar_tareas();
    console.log(tareas)
    }
    