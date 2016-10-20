$(document).ready(function () {
    
    $('#list-items').html(localStorage.getItem('listItems'));
    $('.add-items').submit(function(event) 
    {
        event.preventDefault();
        var item1 = $('#todo-list-title').val();
        var item2 = $('#todo-list-detail').val();
        var item3 = $('#todo-list-date').val();
        
        if(item1) 
        {
            $('#list-items').append("<li><a class='remove'>x</a><input class='checkbox' type='checkbox'/><span class='txttitle'>" + 
                //item1 + "</span><input type='submit' id='edit1' value='Edit Title' class='btnedit'><br/><br/><span class='txtdetail'>" + 
                //item2 + "</span><input type='submit' id='edit2' value='Edit Detail' class='btnedit'><br/><br/><span class='txtdate'>" + 
                //item3 + "</span><input type='submit' id='edit3' value='Edit Date' class='btnedit'><input type='submit' id='edit' value='Edit All' class='btnedit'><hr></li>");
                item1 + "</span><br/><br/><span class='txtdetail'>" + 
                item2 + "</span><br/><br/><span class='txtdate'>" + 
                item3 + "</span><input type='submit' id='edit' value='Edit' class='btnedit'><hr></li>");	
            localStorage.setItem('listItems', $('#list-items').html());
            $('#todo-list-title').val("");
            $('#todo-list-detail').val("");
            $('#todo-list-date').val("");
        }       
    });

    $(document).on('change', '.checkbox', function() 
    {
        if($(this).attr('checked')) 
        {
            $(this).removeAttr('checked');
        } 
        else 
        {
            $(this).attr('checked', 'checked');
        }
        $(this).parent().toggleClass('completed');
        localStorage.setItem('listItems', $('#list-items').html());
    });

    $(document).on('click', '.remove', function() 
    {
        $(this).parent().remove();
        localStorage.setItem('listItems', $('#list-items').html());
    });  
    
    //$(document).on('click', '#edit1', function()
    //{
        //$(this).prev().attr('contenteditable','true');
        //$(this).prev().focus();
        //localStorage.setItem('listItems', $('#list-items').html());
    //});
    
    //$(document).on('click', '#edit2', function()
    //{
        //$(this).prev().attr('contenteditable','true');
        //$(this).prev().focus();
        //localStorage.setItem('listItems', $('#list-items').html());
    //});
    
    //$(document).on('click', '#edit3', function()
    //{
        //$(this).prev().attr('contenteditable','true');
        //$(this).prev().focus();
        //localStorage.setItem('listItems', $('#list-items').html());
    //});
    
    $(document).on('click', '#edit', function()
    {
        $('.txttitle').attr('contenteditable','true');
        $('.txttitle').focus();
        $('.txtdetail').attr('contenteditable','true');
        $('.txtdetail').focus();
        $('.txtdate').attr('contenteditable','true');
        $('.txtdate').focus();
        localStorage.setItem('listItems', $('#list-items').html());
    });
    
    $(function() {
        $("#todo-list-date").datepicker();
    });
});