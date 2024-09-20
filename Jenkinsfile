pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/nevzat17/big.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'docker-compose -f docker-compose.yml up --build -d'
                }
            }
        }

        stage('Test Frontend') {
            steps {
                script {
                    dir('test') {
                        bat 'npm test -- --watchAll=false' // Testleri çalıştırın
                    }
                }
            }
        }

        stage('Test Backend') {
            steps {
                script {
                    dir('test-backend') {
                        bat 'npm test' // Testleri çalıştırın
                    }
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
