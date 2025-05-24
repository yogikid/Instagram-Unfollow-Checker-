// Variabel global untuk menyimpan file
let followersFile = null;
let followingFile = null;

// Event listeners untuk input file
document.getElementById('followers').addEventListener('change', function(e) {
    followersFile = e.target.files[0];
});

document.getElementById('following').addEventListener('change', function(e) {
    followingFile = e.target.files[0];
});

// Fungsi untuk menampilkan pesan alert
function showAlert(message, type = 'warning') {
    const alert = document.getElementById('alert');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alert.style.display = 'block';
}

// Fungsi untuk membaca file sebagai JSON
function readFileAsJson(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                resolve(data);
            } catch (error) {
                reject('Error saat parsing file JSON');
            }
        };
        reader.onerror = () => reject('Error saat membaca file');
        reader.readAsText(file);
    });
}

// Fungsi utama untuk membandingkan list
async function compareLists() {
    // Reset tampilan
    document.getElementById('resultTable').style.display = 'none';
    document.getElementById('alert').style.display = 'none';
    document.getElementById('resultBody').innerHTML = '';

    // Validasi file
    if (!followersFile || !followingFile) {
        showAlert('Mohon upload kedua file JSON');
        return;
    }

    try {
        // Baca dan parse kedua file
        const followerList = await readFileAsJson(followersFile);
        const followingList = await readFileAsJson(followingFile);

        // Buat dictionary followers
        const followerDict = {};
        followerList.forEach(follower => {
            const followerName = follower.string_list_data[0].value;
            followerDict[followerName] = true;
        });

        // Cari users yang tidak follow back
        const notFollowingBack = [];
        followingList.relationships_following.forEach(following => {
            const followingName = following.string_list_data[0].value;
            if (!followerDict[followingName]) {
                notFollowingBack.push(followingName);
            }
        });

        // Tampilkan hasil
        if (notFollowingBack.length === 0) {
            showAlert('Semua orang yang Anda follow telah follow back!', 'success');
        } else {
            const resultBody = document.getElementById('resultBody');
            notFollowingBack.forEach((username, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${username}</td>
                    <td>
                        <a href="https://instagram.com/${username}" 
                           target="_blank" 
                           class="btn-view">
                            Lihat Profil
                        </a>
                    </td>
                `;
                resultBody.appendChild(row);
            });
            document.getElementById('resultTable').style.display = 'block';
        }

    } catch (error) {
        showAlert(`Error saat memproses file: ${error}`, 'danger');
    }
}
