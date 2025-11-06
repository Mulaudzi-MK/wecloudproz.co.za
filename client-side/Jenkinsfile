pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Mulaudzi-MK/wecloudproz.co.za.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing NPM dependencies...'
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building React app...'
                sh 'npm run build'
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        failure {
            echo '❌ Build failed. Check console output for errors.'
        }
        success {
            echo '✅ Build succeeded!'
        }
    }
}
