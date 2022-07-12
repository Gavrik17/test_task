const { Octokit } = require("octokit");


class IssueRep{
    constructor(){
        //токен для работы с github
        this.octokit = new Octokit({
            auth: '__ТОКЕН__'
        });
    };

    //выбирает все issues для выбранного репозитория
    async getAll(owner, repo){
        let issues = await this.octokit.request('GET /repos/{owner}/{repo}/issues', {
            owner,
            repo
        });

        return issues
    };

    //выбирает все комментарии для выбранного issues 
    async getComments(owner, repo, issue_number){
        let comments = await this.octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}/comments', {
            owner,
            repo,
            issue_number
        });

        return comments
    };
};


module.exports = new IssueRep