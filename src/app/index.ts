// Web Components由三项技术组成，Custom elements、 Shadow DOM 和HTML templates,下面是demo演示：
{

    //1.custom elements ~ customized  built-in elements(基于已有元素创建的自定义元素)
    //使用 <p is="yycf-p"></p>
    class YycfP extends HTMLParagraphElement{
        constructor(){
            super();
            //2.影子dom的创建和添加
            const shadow = this.attachShadow({mode:'open'});
            const a = document.createElement('a');
            const style = document.createElement('style');
            const label = this.getAttribute('label');
            a.href= label;
            a.innerHTML =label;
            shadow.appendChild(style)
            shadow.appendChild(a)
            updateStyle(this)
        }
        connectedCallback(){
            console.log('yycf-p被调用')
        }
        disconnectedCallback(){
            console.log('yycf-p被销毁')
        }
        adoptedCallback(){
            console.log('我移动时被调用')
        }
        attributeChangedCallback(){
            console.log('我修改了自身属性')
        }
    }
    customElements.define('yycf-p',YycfP,{extends:'p'})
}

function  updateStyle(elem:any) {
   const shadow  = elem.shadowRoot;
   shadow.querySelector('style').innerHTML = `
        span{
            color:${elem.getAttribute('c')};
        }
   `
}

{
    //1.custom elements ~ Autonomous custom elements（独立的自定义元素，不依赖任何其它元素）
    //使用 <cf-p></cf-p> 
  class CfP extends HTMLElement{
      constructor(){
          super()
          const shadow = this.attachShadow({mode:'open'});
          const span = document.createElement('span');
          const style = document.createElement('style');
          const label = this.getAttribute('label');
          span.append(label);
          shadow.appendChild(style)
          shadow.appendChild(span)
          updateStyle(this)
      }
  }
  customElements.define('cf-p',CfP)

}

{
     // HTML templates 的使用，此处为调式，查看template content.
    const template = document.getElementById('yycf-p') ;
    const templateContent = (template as any).content;
    console.log(templateContent)
    // document.body.appendChild(templateContent)
}

{
    class YycfDiv extends HTMLElement{
        constructor(){
            super()
            // 3、HTML templates 结合web components 的使用。
            const template = document.getElementById('yycf-p');
            const templateContent =(template as any) .content;
            const shadow = this.attachShadow({mode:'open'});
            shadow.appendChild(templateContent.cloneNode(true))
        }
    }
    customElements.define('yycf-div',YycfDiv)
}