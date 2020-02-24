class BaseFormater {
    FillDate(body, base, date){
        body.created = base.created
        body.updated = date
        return body
    }
    Workingdays(days){
        let data = {}
        let worktime = ''
        let start = 1, end = 1, i = 0
        let playException = false
        let translator = ['Domingo' ,'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

        // Em caso de funcionarem um unico dia
        if(days.length == 1){
            data = this._workString(0, 0, 0, days, worktime, translator)
            return data.worktime
        } 

        // ordena
        days = days.sort((a, b)=> a.weekday - b.weekday )
        // Confere se trabalham no domingo
        if(days[0].weekday == 0) {
            playException = true
            i = 1
        }

        for (i; i < days.length-1; i++) {
            // Gera a string de segunda a sabado
            data = this._workString(i, start, end, days, worktime, translator)
            worktime = data.worktime
            // Atualiza dados de inicio e fim            
            start = data.start
            end = data.end
        }

        // Gera a string para domingo
        if(playException) {
            data = this._workString(0, start, 0, days, worktime, translator)
            return data.worktime
        }

        return worktime
    }
    _workString(count, start, end, days, worktime, translator){
        let localWorktime = ''
        // Em caso de que nao seja o ultimo registro do array
        // datas iguais,
        // nao ter buraco entre os dias "restaurante fechado"
        // continua contando
        if(
            count != 0 &&
            days[start].opening == days[count+1].opening &&
            days[start].closing == days[count+1].closing &&
            (
                days[end].weekday + 1 == days[count].weekday ||
                days[end].weekday == days[count].weekday
            )
        ){
            end = count
            return {worktime, start, end}
        // Caso diferente gera string
        }else{
            // String de apenas um dia com horario diferente
            if(start == count){
                localWorktime = 'de ' + translator[days[start].weekday] +
                    ' das ' + days[start].opening +
                    ' ate as ' + days[start].closing
            // String de sequencia de dias
            }else{
                localWorktime = 'de ' + translator[days[start].weekday] +
                    ' a ' + translator[days[count].weekday] +
                    ' das ' + days[start].opening +
                    ' ate as ' + days[start].closing
            }
            // Reseta numero de comeco do proximo loop
            start = count+1
            end = count+1
        }
        if(localWorktime != ''){
            worktime != '' ?
                worktime = worktime + ' e ' + localWorktime :
                worktime = localWorktime.charAt(0).toUpperCase() + localWorktime.slice(1)
        }
        return {worktime, start, end}
    }
}

module.exports = BaseFormater