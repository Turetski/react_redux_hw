const queryBase= "https://api.zp.ru/v1/vacancies/?geo_id=826&limit=";
//period=today&is_new_only=true&
function loadData(url){
    return new Promise (function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);    
        xhr.onload = function(e){
            if(xhr.status !== 200) return reject("Не удалось загрузить данные с сервера");
            if (!xhr.responseText) return reject("Ответ от сервера пустой");
            try{
                resolve(JSON.parse(xhr.responseText));
            } catch(e){
                reject("Получены некорректные данные");
            }
        }
        xhr.onerror = function(e){return reject("LoadError")}
        xhr.send();
    })
}

function loadVacancies(limit, offset){
    return async (dispatch) => {
        dispatch(loadVacanciesStart());
        let vacancies = [];
            //todo try catch
            let result = await loadData(queryBase.concat(limit,"&offset=",offset*limit));
            dispatch(spotPage(offset));
            vacancies=result.vacancies;
            dispatch(loadVacanciesFinish(vacancies, result.metadata.resultset.count))
    }
}

function loadVacanciesStart() {
    return {
        type: 'LOAD_VACANCIES_START',
    }
}
function loadVacanciesError(error) {
    return {
        type: 'LOAD_VACANCIES_ERROR',
        error: error
    }
}
function loadVacanciesFinish(vacancies, totalCount) {
    return {
        type: 'LOAD_VACANCIES_FINISH',
        vacancies: vacancies,
        totalCount: totalCount
    }
}
function spotPage(curPage) {
    return {
        type: 'PAGE_INDENTIFIED',
        page: curPage
    }
}
export {loadVacancies, spotPage}