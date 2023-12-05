const btfilter = document.querySelectorAll('.bt-f')
const optfilter = document.querySelectorAll('.op')
const datainfo = document.querySelectorAll('.open-data')
btfilter.forEach((arrow)=>{
    arrow.addEventListener('click',()=>{
        const option = arrow.closest('.option') 
        const question = arrow.closest('.card-question')
        if(option === null){
            const data = question.querySelector('.data-question')
            const dataItem = data.querySelector('.dt-question')
            if(data.classList.contains('height')){
                data.classList.remove('height')
                data.classList.add('hei')
            }
            if(dataItem.classList.contains('display')){
                dataItem.classList.remove('display')
                dataItem.classList.add('disp')
            }
            const questcontent = question.querySelector('.question')
            questcontent.classList.toggle('hidden')
            arrow.classList.toggle('upside-down')
        }else{
            const filters = option.querySelector('.opt-container')
            filters.classList.toggle('hidden')
            option.classList.toggle('open-card')
            arrow.classList.toggle('upside-down')
        }
    })
})

datainfo.forEach((info,)=>{
    info.addEventListener('click',(e)=>{
        e.preventDefault()
        const data = info.closest('.data-question')
        const dataItem = data.querySelector('.dt-question')
        data.classList.toggle('hei')
        data.classList.toggle('height')
        dataItem.classList.toggle('disp')
        dataItem.classList.toggle('display')
    })
})

optfilter.forEach((filter)=>{
    filter.addEventListener('change',function(){
        const filtertab = filter.closest('.filters')
        const labelname = this.closest('label')
        const filterelement = filtertab.querySelector('.filter-element')
        const filtername = filtertab.querySelector('.content')
        const panel = filtertab.querySelector('.panel')
        const labeltext = labelname.textContent;
        const isChecked = this.checked
        if(isChecked) {
            const newfilter = filterelement.cloneNode(true)
            const newfiltername = filtername.cloneNode(true)
            newfiltername.textContent = labeltext
            newfilter.appendChild(newfiltername)
            newfilter.classList.remove('hidden')
            panel.appendChild(newfilter)
        } else {
            const lastfilter = panel.lastChild;
            if (lastfilter) {
                panel.removeChild(lastfilter);
            }
        }   
    })
})



