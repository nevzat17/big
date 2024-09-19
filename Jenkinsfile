pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/username/repo.git' // GitHub repository URL
            }
        }

        stage('Test Frontend') {
            steps {
                script {
                    dir('test') { // Frontend dizinine gidin
                        sh 'npm install'  // Gerekli bağımlılıkları yükleyin
                        sh 'npm test -- --watchAll=false' // Testleri çalıştırın
                    }
                }
            }
        }

        stage('Test Backend') {
            steps {
                script {
                    dir('test-backend') { // Backend dizinine gidin
                        sh 'npm install'  // Gerekli bağımlılıkları yükleyin
                        sh 'npm test'     // Testleri çalıştırın
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'docker-compose -f docker-compose.yml up --build -d'
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

    post {
        success {
            mail to: 'your_email@example.com',
                 subject: "Jenkins Build Success: ${currentBuild.fullDisplayName}",
                 body: "Build was successful!"
        }
        failure {
            mail to: 'your_email@example.com',
                 subject: "Jenkins Build Failure: ${currentBuild.fullDisplayName}",
                 body: "Build failed!"
        }
    }
}
