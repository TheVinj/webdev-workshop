let correct_answer = ""; // global variable to store the current correct answer

function on_question_load(question, answer_options, answer) {
    update_question_text(question);
    update_answer_buttons_text(answer_options);
    store_correct_answer(answer);
    fetch_clue_image_gif(answer);
}

function update_question_text(question) {
    // TBD update the text of the question
}

function clicks_any_answer_button(){
    // TBD Next steps
}

function update_answer_buttons_text(answer_options) {
    // TBD update the text of the 4 answer buttons
}

function store_correct_answer(answer) {
    // TBD update correct_answer with answer
}

function fetch_clue_image_gif(answer) {
    // TBD fetch clue image gif from Tenor API (after replacing the QUERY) then call on_clue_image_gif_load(gif_url)
}
