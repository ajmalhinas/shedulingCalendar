<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>AJAX Event Calendar for Java and jQuery</title>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.3.2.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/daypilot/common.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/daypilot/calendar.js"></script>
	<link type="text/css" href='${pageContext.request.contextPath}/media/layout.css' rel="stylesheet" />    
</head>
<body>

<h2>AJAX Event Calendar for Java and jQuery</h2>

<div style="margin: 10px 0px 10px 0px"><a href="http://code.daypilot.org/87544/ajax-event-calendar-for-java-and-jquery-open-source">Tutorial</a></div>

<div id="dpc"></div>

<script type="text/javascript">

$(document).ready(function() {
	var dpc = $("#dpc").daypilotCalendar({
		backendUrl : '${pageContext.request.contextPath}/dpc',
		viewType : "Day",
		heightSpec : 'Full',
		timeRangeSelectedHandling : 'CallBack',
		eventMoveHandling : 'CallBack',
		eventResizeHandling : 'CallBack'
	});
});

</script>
</body>
                
</html>