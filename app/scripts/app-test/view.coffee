## 一定要注意格式缩进

class AppTest
  constructor: ($)->	
	  console.info "log from app  test!"
	  #console.log @
	  @showDemoContent(@)

  that = this	
  showDemoContent:(data) ->
  	  $("body").append Handlebars.templates["welcome"]()
	  console.info @ 

module.exports = AppTest