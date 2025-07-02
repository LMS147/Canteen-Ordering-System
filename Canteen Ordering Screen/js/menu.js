function navigateToCategory(category) {
    let url;
    switch (category) {
        case 'pastries':
            url = 'menu/pastries.html';
            break;
        case 'sweet-treats':
            url = 'menu/sweet-treats.html';
            break;
        case 'coffee':
            url = 'menu/coffee.html';
            break;
        case 'teas':
            url = 'menu/teas.html';
            break;
        case 'cold-drinks':
            url = 'menu/cold-drinks.html';
            break;
        case 'others':
            url = 'menu/other.html';
            break;
        default:
            console.error('Category not found:', category);
            return;
    }
    window.location.href = url;
}
