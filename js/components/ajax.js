function ajax(httpMethod, url, callback) {
    const allowMethods = [
        'GET',                      // gauti informacija
        'POST',                     // sukurti
        'PUT',                      // atnaujinti
        'DELETE'                    // istrinti
    ];

    if (!allowMethods.includes(httpMethod)) {
        console.warn('Netinkamas uzklausos metodas');
        return false;
    }

    if (typeof url !== 'string' || url === '') {
        console.warn('Netinkama nuoroda');
        return false;
    }

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                const parsedData = JSON.parse(xhttp.responseText);
                callback(parsedData);
            } catch (error) {
                console.error('Gautas nevalidus JSON is serverio', error);
            }
        }
    };
    xhttp.open(httpMethod, url, true);
    xhttp.send();

    return true;
}

export { ajax }