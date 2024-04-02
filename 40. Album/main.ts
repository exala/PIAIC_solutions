function make_album(artist, title, track = 0) {
    let album = {
        'artist': artist,
        'title': title,
    }
    if (track > 0) {
        album['tracks'] = track
    }

    return album
}

console.log(make_album('Commodores', 'Three Times a Lady', 9))

console.log(make_album('Lynyrd Skynyrd', 'Gimme Three Steps'))

console.log(make_album('Eddie Cochran', 'Three Steps to Heaven'))