const { Router } = require('express');
const router = Router();

const issue = require('../controllers/issue-controller.js');

router.post('/issue', issue.getIssue);
router.post('/comments', issue.getComments);
router.post('/issuebydate', issue.getIssueByDate);


module.exports = router