var _0x571d=['log','release\x20:\x20','cancel\x20:\x20','data','skin','tron','cursorExt','arc','lineWidth','displayPrevious','beginPath','pColor','stroke','strokeStyle','radius','div.idir','div.ival','show','html','fadeOut','input.infinite','.minute','getSeconds','val','trigger','change','.knob'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(_0x571d,0xf2));var _0x5ba6=function(_0x510673,_0x5a6527){_0x510673=_0x510673-0x0;var _0x4d9312=_0x571d[_0x510673];return _0x4d9312;};$(function(_0x5811d0){'use strict';_0x5811d0(_0x5ba6('0x0'))['knob']({'change':function(_0x551e2b){},'release':function(_0x73ea5f){console[_0x5ba6('0x1')](_0x5ba6('0x2')+_0x73ea5f);},'cancel':function(){console[_0x5ba6('0x1')](_0x5ba6('0x3'),this);},'draw':function(){if(this['$'][_0x5ba6('0x4')](_0x5ba6('0x5'))==_0x5ba6('0x6')){this[_0x5ba6('0x7')]=0.3;var _0xd8a68a=this[_0x5ba6('0x8')](this['cv']),_0x44506c,_0x5a75c3=0x1;this['g']['lineWidth']=this[_0x5ba6('0x9')];if(this['o'][_0x5ba6('0xa')]){_0x44506c=this[_0x5ba6('0x8')](this['v']);this['g'][_0x5ba6('0xb')]();this['g']['strokeStyle']=this[_0x5ba6('0xc')];this['g'][_0x5ba6('0x8')](this['xy'],this['xy'],this['radius']-this[_0x5ba6('0x9')],_0x44506c['s'],_0x44506c['e'],_0x44506c['d']);this['g'][_0x5ba6('0xd')]();}this['g'][_0x5ba6('0xb')]();this['g'][_0x5ba6('0xe')]=_0x5a75c3?this['o']['fgColor']:this['fgColor'];this['g']['arc'](this['xy'],this['xy'],this['radius']-this[_0x5ba6('0x9')],_0xd8a68a['s'],_0xd8a68a['e'],_0xd8a68a['d']);this['g'][_0x5ba6('0xd')]();this['g']['lineWidth']=0x2;this['g'][_0x5ba6('0xb')]();this['g'][_0x5ba6('0xe')]=this['o']['fgColor'];this['g'][_0x5ba6('0x8')](this['xy'],this['xy'],this[_0x5ba6('0xf')]-this['lineWidth']+0x1+this[_0x5ba6('0x9')]*0x2/0x3,0x0,0x2*Math['PI'],![]);this['g']['stroke']();return![];}}});var _0x5124aa,_0x2c05ea=0x0,_0x13ad9c=0x0,_0x573f0f=0x0,_0x1a229a=_0x5811d0(_0x5ba6('0x10')),_0x3cbddd=_0x5811d0(_0x5ba6('0x11')),_0x3c766c=function(){_0x573f0f++;_0x1a229a[_0x5ba6('0x12')]()[_0x5ba6('0x13')]('+')[_0x5ba6('0x14')]();_0x3cbddd[_0x5ba6('0x13')](_0x573f0f);},_0x102ccd=function(){_0x573f0f--;_0x1a229a[_0x5ba6('0x12')]()[_0x5ba6('0x13')]('-')['fadeOut']();_0x3cbddd[_0x5ba6('0x13')](_0x573f0f);};_0x5811d0(_0x5ba6('0x15'))['knob']({'min':0x0,'max':0x14,'stopper':![],'change':function(){if(_0x5124aa>this['cv']){if(_0x2c05ea){_0x102ccd();_0x2c05ea=0x0;}else{_0x2c05ea=0x1;_0x13ad9c=0x0;}}else{if(_0x5124aa<this['cv']){if(_0x13ad9c){_0x3c766c();_0x13ad9c=0x0;}else{_0x13ad9c=0x1;_0x2c05ea=0x0;}}}_0x5124aa=this['cv'];}});});function clock(){var _0x1cb16b=$('.second'),_0x146478=$(_0x5ba6('0x16')),_0x1d611b=$('.hour');d=new Date(),s=d[_0x5ba6('0x17')](),m=d['getMinutes'](),h=d['getHours']();_0x1cb16b[_0x5ba6('0x18')](s)[_0x5ba6('0x19')](_0x5ba6('0x1a'));_0x146478[_0x5ba6('0x18')](m)[_0x5ba6('0x19')](_0x5ba6('0x1a'));_0x1d611b[_0x5ba6('0x18')](h)['trigger']('change');setTimeout('clock()',0x3e8);}clock();