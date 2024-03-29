//HTTP es un protocolo que nos permite la comunicacion entre varias computadoras
//En la Api usaremos los metodos get,post,put,delete de http
//http nos devoldera un codigo de respuesta(200 si todo sale bien y 400 si falla)
//Las Api siempre devuelven al cliente un codigo de estado y un json si todo sale bien con los datos
//request = sollicitud, response = respuesta
import{Router} from "express"
import {getAprendices,getAprendiz,createAprendiz,editAprendiz,deleteAprendiz} from "../controllers/aprendices.controllers.js";
const router = Router();
router.get("/aprendices",getAprendices);
router.get("/aprendices/:id",getAprendiz);
router.post("/aprendices",createAprendiz);
router.put("/aprendices/:id",editAprendiz);
router.delete("/aprendices/:id",deleteAprendiz);
export default router;