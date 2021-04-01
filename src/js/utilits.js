/* -- Functions -- */
export function remove(objs, cls){
    if(!Array.isArray(objs)){
        objs.classList.remove(cls);
    }else{
        objs.forEach(obj => {
            obj.classList.remove(cls);
        })
    }
}
export function add(objs, cls){
    if(!Array.isArray(objs)){
        objs.classList.add(cls);
    }else{
        objs.forEach(obj => {
            obj.classList.add(cls);
        })
    }
}