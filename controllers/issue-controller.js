const issueRep = require('../repository/issue-repository');
const issueService = require('../services/issue-service');

class Issue{
    async getIssue(req, res){
        try{
            let {owner, repo} = req.body;
            let issues = await issueRep.getAll(owner, repo);
            issues = issueService.chooseIssue(issues.data);
            let fields = issueService.getRequiredFields(issues);

            if (fields.length){
                return res.json(fields);
            }

            res.json('Нет ни одного Issue');

        } catch(e){
            res.json('Что-то пошло не так');
        }
        
    };

    async getIssueByDate(req, res){
        try{
            let {owner, repo, date} = req.body;
            let issues = await issueRep.getAll(owner, repo);
            issues = issueService.getIssuesByDates(issues.data, date);
            let fields = issueService.getRequiredFields(issues);

            if (fields.length){
                return res.json(fields);
            }

            res.json(`Нет записей по дате: ${date}`);

        } catch(e){
            res.json('Что-то пошло не так');
        }
    };

    async getComments(req, res){
        try{
            let {owner, repo, number} = req.body;
            let comments = await issueRep.getComments(owner, repo, number);
            let fields = issueService.getRequiredFields(comments.data);

            if (fields.length){
                return res.json(fields);
            }

            res.json('Комментариев не найдено');

        } catch(e){
            res.json('Что-то пошло не так');
        }
    };
};

module.exports = new Issue