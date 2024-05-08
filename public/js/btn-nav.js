export function btnNav() {
   
    document.addEventListener('click', (e) => {
        
        let $btn = document.querySelector('.hamburger' || '.hamburger *');

        if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
            
            if ($btn.classList.contains('is-active')) {
                $btn.classList.remove('is-active');
                
            } else {
                $btn.classList.add('is-active');
            }

        } 

        if (e.target.matches('.header-nav-mobile ul a')) {
            $btn.classList.remove('is-active');
        }

    });
}