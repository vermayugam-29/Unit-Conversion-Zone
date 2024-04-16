const unitField = document.getElementById("unit")
const outputOptions = document.getElementById("output")
const options1 = document.getElementById("options")
const input = document.getElementById("input")

const res = document.getElementById("res")

options1.addEventListener('change',function(event){
    const optionSelected = event.target.value
    //input option selected field---------------------------------------------------
    if(optionSelected === "temp"){
        changeInnerHtml(`
        <option value="sel">Select</option>
        <option value="far">Farenheit</option>
        <option value="cel">Celcius</option>
        <option value="kel">Kelvin</option>
        `,unitField)

        //Output options---------------------------------------------
        unitField.addEventListener('change',function(event2){
            const unitSelect = event2.target.value
            if(unitSelect === "far"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="cel">Celcius</option>
                <option value="kel">Kelvin</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "cel"){
                            const ans = (5/9 * (parseInt(input.value)-32)).toFixed(4)
                            res.innerHTML = `${ans}`
                        } else if(opt == "kel"){
                            const ans = ((5/9 * (parseInt(input.value)-32) + 273.15)).toFixed(4)
                            res.innerHTML = `${ans}`
                        }
                    })
                })
            } else if(unitSelect === "cel"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="far">Farenheit</option>
                <option value="kel">Kelvin</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "far"){
                            const ans = (9/5 * parseInt(input.value) + 32).toFixed(4)
                            res.innerHTML = `${ans}`
                        } else if(opt == "kel"){
                            const ans = (parseInt(input.value) + 273.15).toFixed(4)
                            res.innerHTML = `${ans}`
                        }
                    })
                })
            } else if(unitSelect === "kel"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="far">Farenheit</option>
                <option value="cel">Celcius</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "cel"){
                            const ans = (parseInt(input.value) - 273.15).toFixed(4)
                            res.innerHTML = `${ans}`
                        } else if(opt == "far"){
                            const ans = (9/5 * (parseInt(input.value) - 273.15) + 32).toFixed(4)
                            res.innerHTML = `${ans}`
                        }
                    })
                })
            }
        })
        //output options-------------------------------------------------
    } else if(optionSelected === "mass"){
        changeInnerHtml(`
        <option value="sel">Select</option>
        <option value="kg">Kilogram</option>
        <option value="g">Gram</option>
        <option value="mg">Milligram</option>
        `,unitField)

        unitField.addEventListener('change',function(event2){
            const unitSelect = event2.target.value
            if(unitSelect === "kg"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="g">Gram</option>
                <option value="mg">Milligram</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "g"){
                            const ans = parseInt(input.value) * 1000
                            res.innerHTML = `${ans}`
                        } else if(opt == "mg"){
                            const ans = parseInt(input.value) *1000000
                            res.innerHTML = `${ans}`
                        }
                    })
                })
            } else if(unitSelect === "g"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="kg">Kilogram</option>
                <option value="mg">Milligram</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "kg"){
                            const ans = parseInt(input.value) / 1000
                            res.innerHTML = `${ans}`
                        } else if(opt == "mg"){
                            const ans = parseInt(input.value) *1000
                            res.innerHTML = `${ans}`
                        }
                    })
                })
            } else if(unitSelect === "mg"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="kg">Kilogram</option>
                <option value="g">Gram</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "kg"){
                            const ans = parseInt(input.value) / 1000000
                            res.innerHTML = `${ans}`
                        } else if(opt == "g"){
                            const ans = parseInt(input.value) / 1000
                            res.innerHTML = `${ans}`
                        }
                    })
                })
            }
            
        })
    } else if(optionSelected === "len"){
        changeInnerHtml(`
        <option value="sel">Select</option>
        <option value="km">Kilometer</option>
        <option value="m">Meter</option>
        <option value="cm">Centimeter</option>
        `,unitField)

        unitField.addEventListener('change',function(event2){
            const unitSelect = event2.target.value
            if(unitSelect === "km"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="m">Meter</option>
                <option value="cm">Centimeter</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "m"){
                            const ans = parseInt(input.value) * 1000
                            res.innerHTML = `${ans}`
                        } else if(opt == "cm"){
                            const ans = parseInt(input.value) *100000
                            res.innerHTML = `${ans}`
                        }
                    })
                })
            } else if(unitSelect === "m"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="km">Kilometer</option>
                <option value="cm">Centimeter</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "km"){
                            const ans = parseInt(input.value) / 1000
                            res.innerHTML = `${ans}`
                        } else if(opt == "cm"){
                            const ans = parseInt(input.value) * 100
                            res.innerHTML = `${ans}`
                        }
                    })
                })

            } else if(unitSelect === "cm"){
                changeInnerHtml(`
                <option value="sel">Select</option>
                <option value="km">Kilometer</option>
                <option value="m">Meter</option>
                `,outputOptions)
                outputOptions.addEventListener('change',function(e){
                    const opt = e.target.value;
                    input.addEventListener('input',function(e){
                        if(opt === "km"){
                            const ans = parseInt(input.value) / 100000
                            res.innerHTML = `${ans}`
                        } else if(opt == "m"){
                            const ans = parseInt(input.value) / 100
                            res.innerHTML = `${ans}`
                        }
                    })
                })
            }
        })
    }
    //input option selected field----------------------------------------------------------------
})


function changeInnerHtml(s,ele){
    ele.innerHTML = `${s}`
}
