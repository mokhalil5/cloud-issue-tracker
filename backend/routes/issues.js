const express = require('express');
const issueController = require('C:\Users\mohamed249415\Desktop\cloud-issue-tracker\cloud-issue-tracker\backend\controllers\issues.js');
const router = express.Router();
router.get('/', issueController.listIssues);
router.post('/', issueController.createIssue);
router.patch('/:id/status', issueController.updateIssueStatus);
module.exports = router;
