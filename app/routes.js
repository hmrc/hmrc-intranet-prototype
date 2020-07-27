const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

	//xxxxxx
	router.get('/admin/choice_action', function (req, res) {
		
		var choice = req.session.data['choice'];

		if (choice =='news') {
			res.render('admin/new_news', {})
		}
		if (choice =='guidance') {
			res.render('admin/new_guidance', {})
		}
		else if (choice =='policy') {
			res.render('admin/new_policy', {})
		}
	})

	//Route to edit or published depending on choice
	router.get('/admin/final_publish_choice_action', function (req, res) {
		
		var choice = req.session.data['choice'];

		if (choice =='publish') {
			res.render('admin/sent_to_publish_confirm', {})
		}
		else if (choice =='edit') {
			res.render('admin/edit_news', {})
		}
	})

	
module.exports = router
