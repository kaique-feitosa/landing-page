tailwind.config = {
    theme: {
        extend: {
            colors: {
                marrom: {
                    escuro: '#363031',
                    botao: '#A36A4F'
                },
                bege: '#ECDAC4'
            },

            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
                cantarell: ['Cantarell', 'sans-serif']
            },

            fontSize: {
                titulo: ['4rem', '80px'],
                '2rem': ['2rem']
            },

            borderRadius: {
                btn: '2.25rem',
                '7rem': '7rem'
            },

            width: {
                tx: '27.5rem',
                tc: '19.5rem',
                '3/10': '30%'
            },

            inset: {
                '17.5%': '17.5%',
                '53%': '53%'
            }
        }
    }
}