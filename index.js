function postItem(item){
    const newItem =  
    `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      $('.shopping-list').append(newItem);
};



function submitAndShow(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        let userInput = $('#shopping-list-entry').val();
        postItem(userInput);
        $('#shopping-list-entry').val('');
    })
};

function checkButton(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        //$('.shopping-item').addClass('shopping-item__checked');
        $(this).parent().parent().find(".shopping-item").toggleClass('shopping-item__checked');
    })
};

function deleteButton(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').hide();
    })
};

$(submitAndShow);
$(checkButton);
$(deleteButton);