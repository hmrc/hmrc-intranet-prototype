const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

	//xxxxxx
	router.get('/admin/choice_action', function (req, res) {
		
		var choice = req.session.data['choice'];

		if (choice =='content') {
			res.render('admin/new_content', {})
		}
		else if (choice =='news') {
			res.render('admin/new_news', {})
		}
	})

module.exports = router
