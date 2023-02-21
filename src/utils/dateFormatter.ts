import {formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'



export function dateFormatter (date: string){
    return formatDistanceToNow( new Date(date), {
        locale: ptBr,
        addSuffix: true,
    })

}