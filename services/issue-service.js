class IssueService{
    //выбирает активные issues и те которых нет в pull request
    chooseIssue(issues){
        return issues.filter(elem => elem.state == 'open' && elem.hasOwnProperty('pull_request') == false)
    };

    //выбираем поля с интересующей нас информацией
    getRequiredFields(issues){
        return issues.map(el => el = {  user: el.user.login,
                                        title: el.title,
                                        body: el.body,
                                        create: el.created_at,
                                        update: el.updated_at
                                        })
    };

    //выбираем issue по нужной дате
    getIssuesByDates(issues, date){
        return issues.filter((el) => {
            let searchDate = new Date(date).toLocaleDateString({ timeZone: 'Russia/Moscow'})
            let createdDate = new Date(el.created_at).toLocaleDateString({ timeZone: 'Russia/Moscow'})
            return searchDate == createdDate
        });
    };
};


module.exports = new IssueService