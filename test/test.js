function test1(){
  var forNotNull='notnull';
  alert(_notNull(forNotNull));
}
function test2(){
  alert(`以下、_()の結果。\n${_('div').innerText}\n以下、__()の結果。${__('div')[0].innerText}`);
}
function test3(){
  var element=_newEl({
    el: 'p',
    inner: 'new <<span>p</span>> element.',
    attribute: [
      ['style','font-size: 15px;'],
      ['onclick','alert(\'This element is \"p\" element\')']
    ]
  })
  _('div:nth-child(3)').appendChild(element);
}
function test4(){
  _attr(_('div:nth-child(5)>span[style]'),[
    ['onclick','alert("HOGEHOGE")'],
    ['style','color: #11aa37;font-size: 50px;font-weight: 1000']
  ])
}
