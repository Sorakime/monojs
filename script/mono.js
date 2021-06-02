// monoJS by monochrome. Made by Sorakime(@Sorakime_(Instagram, Twitter));
window._newEl=(obj)=>{
  /*
   * argument: object {
   *   el: '<element name',
   *   attribute: [
   *     <attributes, for example...['id','element']>
   *   ],
   *   value: <element's value(element.value)>,
   *   inner: <element's content(element.innerHTML)>
   * }
   */
   var elem=document.createElement(obj.el);
   if(obj.attribute){
     obj.attribute.forEach((value)=>{
       elem.setAttribute(value[0], value[1]);
     });
   }
   if(obj.value){
     elem.value=obj.value;
   }
   if(obj.inner){
     elem.innerHTML=obj.inner;
   }
   return elem;
}

window._=(el)=>{
  return document.querySelector(el);
}

window.__=(el)=>{
  return document.querySelectorAll(el);
}

window._attr=(el, arr)=>{
  /*arr:[
    ['style','font-size: 50px;'],
    ['onclick',"alert('hello')"]
  ]*/
  arr.forEach((value)=>{
    el.setAttribute(value[0], value[1]);
  });
}

window._notNull=(tar)=>{
  if(tar){
    return true;
  } else {
    return false;
  }
}
