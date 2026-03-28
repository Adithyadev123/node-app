pipeline {
    agent any

    environment {
        DEPLOY_SERVER = "13.206.13.130"
        APP_DIR = "node-app"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Build successful"'
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['b3de989f-fcd0-4c5c-a848-fbb3fece1b70']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ubuntu@${DEPLOY_SERVER} '
                    cd ${APP_DIR} &&
                    git pull &&
                    npm install &&
                    pm2 restart node-app || pm2 start app.js --name node-app
                    '
                    """
                }
            }
        }
    }
}
