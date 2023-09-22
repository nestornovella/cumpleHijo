
function $ (id){
    return document.getElementById(id)
}

function cronos(dateToParty){
    let now = new Date()
    let timeRestant = ( new Date(dateToParty) - now + 1000) / 1000
    let secondsRest = ( '0' + Math.floor(timeRestant % 60)).slice(-2)
    let minutesRest = ( '0' + Math.floor(timeRestant / 60 % 60)).slice(-2)
    let hoursRest = ( '0' + Math.floor(timeRestant / 3600 % 24)).slice(-2)
    let daysRest =(Math.floor( timeRestant / (3600 * 24)))
  
    return {
      secondsRest,
      minutesRest,
      hoursRest,
      daysRest
    } 
  }
const $days = $('day')
const $hour = $('hour')
const $min = $('min')
const $sec = $('sec')



setInterval(()=>{
    const timeToParty = cronos('2023-09-30T19:03:08.598Z')
    
    $days.textContent = timeToParty.daysRest
    $hour.textContent = timeToParty.hoursRest
    $min.textContent = timeToParty.minutesRest
    $sec.textContent = timeToParty.secondsRest
}, 1000)
  

alert("El sabado 23 se suspendio por lluvia!, Pero se paso para el dia Sabado 30, los Esperamos!!!")
  