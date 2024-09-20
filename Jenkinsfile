pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                  git branch: 'main', url: 'https://github.com/nevzat17/big.git'
            }
        }

        stage('Test Frontend') {
            steps {
                script {
                    dir('test') { // Frontend dizinine gidin
                        bat 'npm install'  // Gerekli bağımlılıkları yükleyin
                        bat 'npm test -- --watchAll=false' // Testleri çalıştırın
                    }
                }
            }
        }

        stage('Test Backend') {
            steps {
                script {
                    dir('test-backend') { // Backend dizinine gidin
                        bat 'npm install'  // Gerekli bağımlılıkları yükleyin
                        bat 'npm test'     // Testleri çalıştırın
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'docker-compose -f docker-compose.yml up --build -d'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying application...'
                    // Uygulamanızın dağıtımı burada yapılabilir
                }
            }
        }
    }
}
